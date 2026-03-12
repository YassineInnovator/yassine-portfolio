import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PortfolioResponseDto } from './portfolio.types';

@Injectable()
export class PortfolioService {
  constructor(private readonly prisma: PrismaService) {}

  async getPortfolio(): Promise<PortfolioResponseDto> {
    const profile = await this.prisma.portfolioProfile.findFirst({
      include: {
        stats: {
          orderBy: {
            displayOrder: 'asc',
          },
        },
        experiences: {
          orderBy: {
            displayOrder: 'asc',
          },
        },
        projects: {
          orderBy: {
            displayOrder: 'asc',
          },
        },
        education: {
          orderBy: {
            displayOrder: 'asc',
          },
        },
        skillGroups: {
          orderBy: {
            displayOrder: 'asc',
          },
        },
        certifications: {
          orderBy: {
            displayOrder: 'asc',
          },
        },
        languages: {
          orderBy: {
            displayOrder: 'asc',
          },
        },
        interests: {
          orderBy: {
            displayOrder: 'asc',
          },
        },
      },
    });

    if (!profile) {
      throw new NotFoundException(
        'Portfolio data is not available yet. Run the Prisma seed first.',
      );
    }

    return {
      profile: {
        fullName: profile.fullName,
        headline: profile.headline,
        tagline: profile.tagline,
        location: profile.location,
        email: profile.email,
        phone: profile.phone,
        githubUrl: profile.githubUrl,
        linkedInUrl: profile.linkedInUrl,
        summary: profile.summary,
        availability: profile.availability,
        resumePath: profile.resumePath,
        focusAreas: profile.focusAreas,
        stackHighlights: profile.stackHighlights,
      },
      stats: profile.stats.map(({ value, label, description }) => ({
        value,
        label,
        description,
      })),
      experiences: profile.experiences.map(
        ({ period, role, company, location, summary, highlights, stack }) => ({
          period,
          role,
          company,
          location,
          summary,
          highlights,
          stack,
        }),
      ),
      projects: profile.projects.map(
        ({ name, period, kind, summary, challenge, highlights, stack }) => ({
          name,
          period,
          kind,
          summary,
          challenge,
          highlights,
          stack,
        }),
      ),
      education: profile.education.map(
        ({ period, institution, degree, location, note }) => ({
          period,
          institution,
          degree,
          location,
          note,
        }),
      ),
      skillGroups: profile.skillGroups.map(({ name, description, items }) => ({
        name,
        description,
        items,
      })),
      certifications: profile.certifications.map(({ name, issuer }) => ({
        name,
        issuer,
      })),
      languages: profile.languages.map(({ name, level }) => ({
        name,
        level,
      })),
      interests: profile.interests.map(({ label }) => label),
    };
  }
}
