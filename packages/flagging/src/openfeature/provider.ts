import type {
  Provider,
  EvaluationContext,
  JsonValue,
  Logger,
  Paradigm,
  ProviderMetadata,
  ResolutionDetails,
} from '@openfeature/web-sdk'

// We need to use a class here to properly implement the OpenFeature Provider interface
// which requires class methods and properties. This is a valid exception to the no-classes rule.
/* eslint-disable-next-line no-restricted-syntax */
export class DatadogProvider implements Provider {
  readonly metadata: ProviderMetadata = {
    name: 'datadog',
  }
  readonly runsOn: Paradigm = 'client'

  resolveBooleanEvaluation(
    _flagKey: string,
    defaultValue: boolean,
    _context: EvaluationContext,
    _logger: Logger
  ): ResolutionDetails<boolean> {
    return {
      value: defaultValue,
      reason: 'DEFAULT',
    }
  }

  resolveStringEvaluation(
    _flagKey: string,
    defaultValue: string,
    _context: EvaluationContext,
    _logger: Logger
  ): ResolutionDetails<string> {
    return {
      value: defaultValue,
      reason: 'DEFAULT',
    }
  }

  resolveNumberEvaluation(
    _flagKey: string,
    defaultValue: number,
    _context: EvaluationContext,
    _logger: Logger
  ): ResolutionDetails<number> {
    return {
      value: defaultValue,
      reason: 'DEFAULT',
    }
  }

  resolveObjectEvaluation<T extends JsonValue>(
    _flagKey: string,
    defaultValue: T,
    _context: EvaluationContext,
    _logger: Logger
  ): ResolutionDetails<T> {
    return {
      value: defaultValue,
      reason: 'DEFAULT',
    }
  }
}
